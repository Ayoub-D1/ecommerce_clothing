import { SingupForm } from "../../components/signup/singup-form";
import SignInForm from "../../components/signin/singin-form";
import "./authentication.scss";

export default function Auth() {
  return (
    <div>
      <div className="forms-container">
        <SignInForm />
        <SingupForm />
      </div>
    </div>
  );
}
