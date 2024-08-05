import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Page() {
	return (
		<>
			<header>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
			<p>You can only see this if you are authenticated</p>
		</>
	);
}
