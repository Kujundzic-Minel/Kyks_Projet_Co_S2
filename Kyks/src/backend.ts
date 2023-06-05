import PocketBase from 'pocketbase';
import type { EventResponse, EventRecord } from './pocketbase-types';
import { ref } from 'vue';


export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getallEvents() {
    const events = await pb.collection('event').getFullList<EventResponse>();
    return events;
}


export async function createEvent(eventData: EventRecord) {
    try {
      const response = await pb.collection('events').create(eventData);
      console.log('Événement créé avec succès', response);
      return response;
    } catch (error) {
      console.error('Erreur lors de la création de l\'événement', error);
      throw error;
    }
  }


  export async function oneEvent(id: string) {
    return await pb.collection('event').getOne<EventResponse>(id)
  }


