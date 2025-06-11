import { useEffect, useState } from "react";
import NewAccount from "./NewAccount";
import OldAccount from "./OldAccount";
import useGetAllBankAccount from "../../../../hooks/useGetAllBankAccount";

const BankAccounts = ({ amount }) => {
  const { bankAccounts } = useGetAllBankAccount();
  const [tabs, setTabs] = useState("");
  useEffect(() => {
    if (bankAccounts?.length > 0) {
      setTabs("oldAccount");
    } else {
      setTabs("newAccount");
    }
  }, [bankAccounts]);
  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%]"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div className="px-2 pb-2 flex flex-col items-start justify-start gap-y-2 mt-1 md:mt-[0px]">
        <div className="w-full flex flex-col gap-2 pt-2 pb-1 px-4 rounded-lg bg-bg_Quaternary">
          <div className="font-lato font-[600] text-base leading-5">
            Withdraw Funds
          </div>
          <div className="w-full flex flex-col text-xs text-text_Ternary transition-all ease-in-out duration-100">
            <div className="text-xs md:text-sm font-lato pt-1 font-semibold leading-4">
              1. This form is for withdrawing the amount from the main wallet
              only.
            </div>
            <div
              className="overflow-hidden transition-height duration-100 ease-in-out"
              style={{ height: "0px" }}
            ></div>
            <div
              className="overflow-hidden transition-height duration-100 ease-in-out"
              style={{ height: "20px" }}
            >
              <div className="text-xs pt-1 md:text-sm font-lato font-semibold leading-4">
                2. The bonus wallet amount cannot be withdrawn by this form.
              </div>
            </div>
            <div
              className="overflow-hidden transition-height duration-100 ease-in-out"
              style={{ height: "20px" }}
            >
              <div className="text-xs pt-1 md:text-sm font-lato font-semibold leading-4">
                3. Do not put Withdraw request without betting with deposit
                amount. Such activity will be identified as Suspicious
              </div>
            </div>
            <div
              className="overflow-hidden transition-height duration-100 ease-in-out"
              style={{ height: "20px" }}
            >
              <div className="text-xs pt-1 md:text-sm font-lato font-semibold leading-4">
                4. If multiple users are using same withdraw account then all
                the linked users will be blocked.
              </div>
            </div>
          </div>
        </div>
        <div className="text-base text-text_Ternary font-roboto w-full font-[700] flex flex-col items-start justify-start gap-y-1">
          <span className="font-lato">Please fill in all required fields*</span>
          <div className="font-lato text-sm w-full">
            <div
              id="step-selectMode"
              className="relative flex w-[100%] rounded-lg border shadow bg-bg_Quaternary overflow-clip undefined"
            >
              <button
                onClick={() => setTabs("newAccount")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold ${
                  tabs === "newAccount"
                    ? "text-text_Quaternary"
                    : "text-text_Quinary"
                } undefined`}
                style={{ zIndex: 10 }}
              >
                Use New Account
              </button>
              <button
                onClick={() => setTabs("oldAccount")}
                className={`flex items-center justify-center w-full gap-1.5 tracking-wider undefined p-3 text-sm font-semibold  undefined ${
                  tabs === "oldAccount"
                    ? "text-text_Quaternary"
                    : "text-text_Quinary"
                } `}
                style={{ zIndex: 10 }}
              >
                Use Previous Account
              </button>
              <div
                className={`w-[48%] absolute z-10 h-full transition-all ease-in-out p-1 ${
                  tabs === "newAccount" ? "left-0" : "right-0"
                }`}
                style={{ zIndex: 9, width: "50%", bottom: "0px" }}
              >
                <div className="w-full h-full bg-bg_Primary rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        {tabs === "newAccount" && <NewAccount setTabs={setTabs} />}
        {tabs === "oldAccount" && (
          <OldAccount bankAccounts={bankAccounts} amount={amount} />
        )}
      </div>
    </div>
  );
};

export default BankAccounts;
