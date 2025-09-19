// src/components/AuthModal.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  setLoggedUser: (userId: string) => void;
}

export function AuthModal({ open, onClose, setLoggedUser }: AuthModalProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // ✅ Signup
  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful");
        setLoggedUser(data.userId);
        setIsLoggedIn(true);
        localStorage.setItem("userId", data.userId); // ✅ store session
        resetForm();
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Login
  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        setLoggedUser(data.userId);
        setIsLoggedIn(true);
        localStorage.setItem("userId", data.userId); // ✅ store session
        resetForm();
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    localStorage.removeItem("userId"); // ✅ clear session
    setLoggedUser("");
    setIsLoggedIn(false);
    alert("Logged out successfully");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-20">
      <div className="bg-background text-foreground p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Authentication</h2>

        {!isLoggedIn ? (
          <>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2"
            />
            <Input
              placeholder="Email (only for signup)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />

            <div className="flex justify-between">
              <Button onClick={handleSignup} disabled={loading}>
                {loading ? "..." : "Signup"}
              </Button>
              <Button onClick={handleLogin} disabled={loading}>
                {loading ? "..." : "Login"}
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </div>
          </>
        ) : (
          <div className="flex justify-between">
            <Button onClick={handleLogout} disabled={loading}>
              Logout
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
