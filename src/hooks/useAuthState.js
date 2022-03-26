import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function useAuthState() {
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const [userState, setUserState] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserState(true);
            setLoading(false);
        } else {
            setUserState(false);
            setLoading(false);
        }
    })

    return [userState, loading, auth]
}

export default useAuthState;