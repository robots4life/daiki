import supabase from './supabase';

// https://supabase.com/docs/reference/javascript/auth-user
// Inside a browser context, user() will return the user data, if there is a logged in user.
export function getUser() {
	return supabase.auth.user();
}

// https://supabase.com/docs/reference/javascript/auth-signin
export async function signIn({ email }) {
	const { user, session, error } = await supabase.auth.signIn({ email });
	return { data: !error, error };
}

// https://supabase.com/docs/reference/javascript/auth-signout
export async function signOut() {
	const { error } = await supabase.auth.signOut();
	return { data: !error, error };
}
