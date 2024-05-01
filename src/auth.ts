import { SvelteKitAuth } from "@auth/sveltekit";
import github from "@auth/sveltekit/providers/github";
import { GITHUB_ID,GITHUBSECRET } from "$env/static/private";

export const {handle} = SvelteKitAuth({
    providers: [
        github({
        clientId: GITHUB_ID,
        clientSecret: GITHUBSECRET,
        }),
    ],
})
