import Profile from "@/features/profile/Profile";
import PageLayout from "@/features/settings/PageLayout";

const ProfilePage = () => {
  return (
    <PageLayout>
      <p className="font-bold text-lg">My Profile</p>
      <Profile />
    </PageLayout>
  );
};

export default ProfilePage;
