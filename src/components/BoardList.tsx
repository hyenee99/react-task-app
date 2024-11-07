const handleSignOut = () => {
  signOut(auth)
  .then(() => {
    dispatch(
      removeUser()
    )
  })
  .catch((error) => {
    console.error(error);
  })
}