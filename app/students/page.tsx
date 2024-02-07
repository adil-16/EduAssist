// StudentPage.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const StudentPage = () => {
  const [book, setBook] = useState<File | null>(null);
  const [notes, setNotes] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setBook(file);
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setNotes(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("book", book as File);
    formData.append("notes", notes as File);
    setStatus("Uploading...");
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("Upload successful");
      } else {
        throw new Error(res.statusText);
      }
    } catch (error: any) {
      setStatus(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-800 ">
        <div className="bg-gray-800 text-white p-8 max-w-md w-full">
          <h1 className="text-3xl font-semibold mb-4">Hello, Student</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="text-lg font-semibold" htmlFor="book">
              Upload a book
            </label>
            <input
              type="file"
              id="book"
              name="book"
              onChange={handleBookChange}
              accept=".pdf,.epub,.mobi"
              required
              className="p-2 border rounded"
            />
            <label className="text-lg font-semibold" htmlFor="notes">
              Upload notes/slides
            </label>
            <input
              type="file"
              id="notes"
              name="notes"
              onChange={handleNotesChange}
              accept=".pdf,.ppt,.pptx"
              required
              className="p-2 border rounded"
            />
            <button
              className="px-4 py-2 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100"
              type="button"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </form>
          <p className="mt-4 text-red-500 text-sm">{status}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentPage;
