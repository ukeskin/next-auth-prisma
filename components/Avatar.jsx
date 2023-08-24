const Avatar = ({ user, ...props }) => {
  if (!user.image) {
    return (
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
        alt={user.name}
        {...props}
      />
    );
  }

  return (
    <img
      className="h-8 w-8 rounded-full"
      src={user.image}
      alt={user.name}
      {...props}
    />
  );
};

export default Avatar;
