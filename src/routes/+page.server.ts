// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/auth');
    }

    console.log("Exist session: ", locals.user);

    return {
        user: locals.user
    };
};