"use client";
import { redirect } from "next/navigation";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentPassword = (
      event.currentTarget.elements.namedItem(
        "currentPassword"
      ) as HTMLInputElement
    ).value;
    const newPassword = (
      event.currentTarget.elements.namedItem("newPassword") as HTMLInputElement
    ).value;
    const confirmNewPassword = (
      event.currentTarget.elements.namedItem(
        "confirmNewPassword"
      ) as HTMLInputElement
    ).value;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return toast.error("Please fill in all fields");
    }

    if (newPassword.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    if (newPassword === currentPassword) {
      return toast.error(
        "New password must be different from current password"
      );
    }

    if (newPassword !== confirmNewPassword) {
      return toast.error("Passwords do not match");
    }

    const response = await fetch("/api/admin/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      return toast.error(response.status + " - Something went wrong");
    }
    const json = await response.json();

    if (json.error) {
      return toast.error(json.message);
    }
    toast.success(json.message);
    toast.info("Redirecting to dashboard");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 3000);
  }

  return (
    <>
      <section className="container">
        <h1 className="text-4xl font-bold py-4 max-w-md mx-auto">
          Change Password
        </h1>

        <form
          className="flex flex-col gap-4 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              className="p-2 rounded shadow"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              className="p-2 rounded shadow"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              className="p-2 rounded shadow"
            />
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Change Password
          </button>
        </form>

        <ToastContainer />
      </section>
    </>
  );
}

export default ChangePassword;
