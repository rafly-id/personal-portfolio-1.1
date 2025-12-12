import ParallaxImage from "@/components/animations/ParalaxImages";

const ProfileSection = () => {
  return (
    <div className="w-full h-auto object-cover">
      <ParallaxImage
        src="/images/profile-5.png"
        alt="Profile"
        enableReveal={true}
      />
    </div>
  );
};

export default ProfileSection;
