import { useRouter } from "next/router";
import { useReducer } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetupPage;
