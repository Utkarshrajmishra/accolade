import Wrapper from "@/components/global/Wrapper";
import Image from "next/image";
import Logo from "@/public/logo-dark.png"
const Register = () => {
  return (
    <div className=" bg-black h-screen">
      <div>
         <Image src={Logo} alt="Logo" width={50} height={50}/>
         <p>Register in Accolade</p>
         <div>
            
         </div>
      </div>
    </div>
  );
};
export default Register;
