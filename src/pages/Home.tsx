import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActiveLoanCard from "../components/card/ActiveLoanCard";
import useFetchUserData from "../hooks/useFetchUserData";
import { UserData } from "../types/UserTypes";

export const Home = () => {
  const navigate = useNavigate()
  const { userData, fetchDataFromIndexedDB } = useFetchUserData();

  useEffect(() => {
    fetchDataFromIndexedDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main style={{
        ...styles.mainWrapper as React.CSSProperties,
      }}>
        <header style={{ ...styles.headWrapper as React.CSSProperties }}>
          <p style={{ ...styles.activeLoanTitle as React.CSSProperties }}>وام های فعال شما</p>
          <p style={{ fontSize: "12pt" }}>
            {` سلام ${userData[0]?.FirstName ?
              (userData[0]?.FirstName + userData[0]?.LastName) :
              "کاربر"}`}
          </p>
        </header>
        <section style={{ ...styles.cardWrapper as React.CSSProperties }}>
          {
            userData.length !== 0 ?
              userData.map((data: UserData, index: number) => (
                <ActiveLoanCard key={index + Math.random()} DBData={data} />
              ))
              : <div style={{ ...styles.cardWrapperEmpty as React.CSSProperties }}>
                در حال حاضر وام فعالی ندارید!
              </div>}
        </section>
        <nav>
          <button onClick={() => { navigate("../loan") }}>شروع فرآیند جدید</button>
        </nav>
      </main>
    </>)
}
const styles = {
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    boxSizing: "border-box"
  },
  cardWrapperEmpty: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    fontSize: "12pt",
    borderRadius: "1rem",
    backgroundColor: "#e5effe",
    gap: "1rem",
  },
  headWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
    gap: ".2rem",
    padding: "0 2rem",
  },
  activeLoanTitle: {
    color: "#3068fa",
    fontWeight: "bold"
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "80%",
    height: "23rem",
    overflowY: "auto"
  }
}