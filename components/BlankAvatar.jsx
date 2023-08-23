const BlankAvatar = ({ name, ...props }) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`}
      alt={name}
      {...props}
    />
  );
};

export default BlankAvatar;
