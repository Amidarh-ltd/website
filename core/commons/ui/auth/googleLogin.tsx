import { GoogleLogin } from "@react-oauth/google";
import { UseOAuth } from "@/core/hooks/oauth";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { toast } from "sonner";

export const GoogleAuth = () => {
  const { signInWithGoogle, loading, success } = UseOAuth();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(
              credentialResponse.credential || "",
            ) as JwtPayload;
            signInWithGoogle(decoded);
          }}
          onError={() => {
            toast.error(
              "Failed to initialize Google auth, try using email/password",
            );
          }}
          ux_mode="popup"
          width="100%"
          size="large"
        />
      )}
    </>
  );
};
