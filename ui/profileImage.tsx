import Image from "next/image";
import noProfile from "@/app/assets/images/no_profile.png";

const ProfileImage = () => {
  return (
    <div className={""}>
      <Image src={noProfile} alt="Davide Filippi" height={200} />
    </div>
  );
};

export default ProfileImage;
