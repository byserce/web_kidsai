'use server';
/**
 * @fileOverview A personalized scavenger hunt creation AI agent.
 *
 * - createPersonalizedScavengerHunt - A function that handles the scavenger hunt creation process.
 * - PersonalizedScavengerHuntInput - The input type for the createPersonalizedScavengerHunt function.
 * - PersonalizedScavengerHuntOutput - The return type for the createPersonalizedScavengerHunt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedScavengerHuntInputSchema = z.object({
  childsInterests: z
    .string()
    .describe('A description of the child\'s interests.'),
  availableItems: z.string().describe('The items available around the house.'),
});
export type PersonalizedScavengerHuntInput = z.infer<typeof PersonalizedScavengerHuntInputSchema>;

const PersonalizedScavengerHuntOutputSchema = z.object({
  scavengerHuntList: z
    .string()
    .describe('A list of items for the scavenger hunt based on the child\'s interests and available items.'),
});
export type PersonalizedScavengerHuntOutput = z.infer<typeof PersonalizedScavengerHuntOutputSchema>;

export async function createPersonalizedScavengerHunt(
  input: PersonalizedScavengerHuntInput
): Promise<PersonalizedScavengerHuntOutput> {
  return personalizedScavengerHuntFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedScavengerHuntPrompt',
  input: {schema: PersonalizedScavengerHuntInputSchema},
  output: {schema: PersonalizedScavengerHuntOutputSchema},
  prompt: `You are an AI assistant designed to create personalized scavenger hunt lists for children.

  Given the child's interests and the available items around the house, create a list of items for the scavenger hunt.
  Make the list engaging and fun for the child, incorporating their interests where possible.

  Child's Interests: {{{childsInterests}}}
  Available Items: {{{availableItems}}}

  Scavenger Hunt List:`,
});

const personalizedScavengerHuntFlow = ai.defineFlow(
  {
    name: 'personalizedScavengerHuntFlow',
    inputSchema: PersonalizedScavengerHuntInputSchema,
    outputSchema: PersonalizedScavengerHuntOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
