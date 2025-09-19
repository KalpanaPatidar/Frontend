import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InternshipRegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export function InternshipRegisterModal({
  open,
  onClose,
}: InternshipRegisterModalProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [interestSector, setInterestSector] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setAge("");
    setQualification("");
    setDegree("");
    setLocation("");
    setInterestSector("");
  };

  const handleInternshipSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/internship/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          age,
          qualification,
          degree,
          location,
          interestSector,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Internship Registered!");
        resetForm();
        onClose();
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-20">
      <div className="bg-background text-foreground p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Internship Registration</h2>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Interest Sector"
          value={interestSector}
          onChange={(e) => setInterestSector(e.target.value)}
          className="mb-4"
        />

        <div className="flex justify-between">
          <Button onClick={handleInternshipSubmit} disabled={loading}>
            {loading ? "..." : "Register"}
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
