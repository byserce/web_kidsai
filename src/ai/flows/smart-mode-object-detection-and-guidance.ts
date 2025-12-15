// This is a server-side file that uses Genkit to create an AI flow for real-time object detection and guidance using audio and fun facts in Smart Mode.
'use server';

/**
 * @fileOverview Implements an AI flow for real-time object detection and guidance in Smart Mode.
 *
 * - `detectObjectAndProvideGuidance` - Function to initiate the object detection and guidance flow.
 * - `SmartModeInput` - Input type for the `detectObjectAndProvideGuidance` function.
 * - `SmartModeOutput` - Output type for the `detectObjectAndProvideGuidance` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const SmartModeInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo captured during Smart Mode, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SmartModeInput = z.infer<typeof SmartModeInputSchema>;

const SmartModeOutputSchema = z.object({
  objectName: z.string().describe('The name of the detected object.'),
  funFact: z.string().describe('A fun fact about the detected object.'),
  audioGuidance: z.string().describe('Audio guidance related to the object in WAV format as data URI.'),
});
export type SmartModeOutput = z.infer<typeof SmartModeOutputSchema>;

export async function detectObjectAndProvideGuidance(input: SmartModeInput): Promise<SmartModeOutput> {
  return smartModeObjectDetectionAndGuidanceFlow(input);
}

const objectDetectionPrompt = ai.definePrompt({
  name: 'objectDetectionPrompt',
  input: {schema: SmartModeInputSchema},
  output: {schema: SmartModeOutputSchema},
  prompt: `You are an AI assistant designed to detect objects in images and provide helpful and fun information for kids. 

  Analyze the image provided and identify the main object. Then, provide a fun fact about the object and generate audio guidance related to the object for kids.

  Photo: {{media url=photoDataUri}}
  
  Ensure that the fun fact is appropriate for children and related to the detected object. Also the audio guidance should be welcoming to kids.
  Object Name: 
  Fun Fact: 
  Audio Guidance: `,
});


const smartModeObjectDetectionAndGuidanceFlow = ai.defineFlow(
  {
    name: 'smartModeObjectDetectionAndGuidanceFlow',
    inputSchema: SmartModeInputSchema,
    outputSchema: SmartModeOutputSchema,
  },
  async input => {
    const objectDetectionResult = await objectDetectionPrompt(input);
    if (!objectDetectionResult.output) {
      throw new Error('Could not extract object detection information.');
    }

    // Generate audio guidance using TTS
    const audioPrompt = `KidsAI: Welcome kids! I see a ${objectDetectionResult.output.objectName}. ${objectDetectionResult.output.funFact}`;
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: audioPrompt,
    });

    if (!media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const audioGuidance = 'data:audio/wav;base64,' + (await toWav(audioBuffer));


    return {
      objectName: objectDetectionResult.output.objectName,
      funFact: objectDetectionResult.output.funFact,
      audioGuidance: audioGuidance,
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}










