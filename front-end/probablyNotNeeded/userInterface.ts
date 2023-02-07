export interface User {
	_id: string;
	username: string;
	user_description?: string;
	user_tags?: string[];
	github_account_link?: string;
	following: number[];
	followed_by: number[];
	follower_count: number;
	authored_ideas: number[];
	owned_projects: number[];
	watched_projects: number[];
	createdAt: Date;
	updatedAt: Date;
}

export interface NewUser {
	username: string;
	user_description?: string;
	user_tags?: string[];
	github_account_link?: string;

	// These attributes aren't needed / are server
	// Generated

	// following: number[];
	// followed_by: number[];
	// follower_count: number;
	// authored_ideas: number[];
	// owned_projects: number[];
	// watched_projects: number[];
	// date_joined: Date;
	// date_updated: Date;
}