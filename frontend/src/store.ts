import { writable } from "svelte/store";

type user = {
    name: string,
    token: string
}

const temp_user : user = {
    name: "vudiep411",
    token: "JWTtoken"
}

export const user = writable<user>(temp_user || null)