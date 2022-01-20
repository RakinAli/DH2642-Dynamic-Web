function StartView(props) {
  return (
		<div id="login-box" class="startView-loginbox">
			<div class="left">
				<h1 id="status">Login Page</h1>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Email"
					onInput={(evt) => props.onEmail(evt.target.value)}
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onInput={(evt) => props.onPassword(evt.target.value)}
				/>
				<input
					type="submit"
					id="login"
					name="login"
					value="login"
					onClick={() => props.onSignIn()}
				/>
				<input
					type="submit"
					id="signup"
					name="signup"
					value="signup"
					onClick={() => props.onSignUp()}
				/>
			</div>
		</div>
	);
}
