export const getProfileDisplayName = (profile: {
  name?: string;
  email: string;
}) => {
  return profile.name ? profile.name : profile.email;
};
