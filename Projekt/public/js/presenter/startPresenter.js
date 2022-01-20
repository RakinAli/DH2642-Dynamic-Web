const StartPresenter = {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  render() {
    return (
			<StartView
				onSignIn={() =>
					auth
						.signInWithEmailAndPassword(this.email, this.password)
						.catch((error) => {
							const errorMessage = error.message;
							alert(errorMessage);
						})
				}
				onSignUp={() =>
					auth
						.createUserWithEmailAndPassword(this.email, this.password)
						.then((cred) => {
							firebase
								.database()
								.ref(`users/${cred.user.uid}`)
								.set({ bookProject: null, email: email });
						})
						.catch((error) => {
							const errorMessage = error.message;
							alert(errorMessage);
						})
				}
				onEmail={(email) => (this.email = email)}
				onPassword={(password) => (this.password = password)}
			/>
		);
  },
};
