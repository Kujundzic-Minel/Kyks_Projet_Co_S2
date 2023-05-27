import PocketBase from 'pocketbase';
import type { EventResponse } from './pocketbase-types';


export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getallEvents() {
    const events = await pb.collection('event').getFullList<EventResponse>();
    return events;
}

