import Image from "next/image";
import noProfile from "@/app/assets/images/no_profile.png";

const ProfileImage = () => {
  return (
    <Image
      className="rounded-3xl"
      src={noProfile}
      alt="Davide Filippi"
      height={200}
    />
  );
};

export default ProfileImage;
