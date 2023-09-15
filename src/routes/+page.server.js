import { asText } from '@prismicio/client'

import { createClient } from "$lib/prismicio"

export const prerender = true;

export async function load(){
    const client = createClient()

    const document = await client.getByUID('index', 'index')

    return document.data
}