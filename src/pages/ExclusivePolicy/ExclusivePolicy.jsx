import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";

const ExclusivePolicy = () => {
  return (
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
      <LeftDeskSidebar />
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[59%]"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <div title="Self Exclusion" className="px-5 py-2 font-lato">
          <h1 className="text-text_Ternary font-lato font-[700] text-base md:text-[19px]">
            Self Exclusion
          </h1>
          <div className="general">
            <h2 className="text-text_Ternary font-lato font-[600] leading-tight text-base md:text-[17px]">
              What is a Self-Exclusion?
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              Self-exclusion is a facility that the Site offers to help those
              customers who feel that their gambling is out of control and want
              us to help them stop. By entering into a self-exclusion agreement
              with the Site, you will be prevented from using your Account (as
              defined in the terms and conditions) for a specific period, as
              determined by you, of between 6 months and 5 years.
            </p>
            <h2 className="text-text_Ternary font-lato font-[600] leading-tight text-base md:text-[17px]">
              How to self-exclude from the Site
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              If at any time you should you wish to exclude yourself from use of
              the Site (as defined in the terms and conditions), you must submit
              this request by email to
              <a
                id="emailLink"
                href="mailto:support@betting.com"
                className="text-text_Primary"
              >
                support@betting.com.
              </a>
            </p>
            <p className="mt-1 mb-1 text-justify leading-tight">
              Please inform us of the period for which you wish to self-exclude.
              The minimum is <strong>6 months</strong> and the
              <strong>maximum is 5 years</strong>. If you request self-exclusion
              but do not specify a period, we will exclude you for the minimum
              period of <strong>six months</strong>.
            </p>
            <h2 className="text-text_Ternary font-lato font-[600] leading-tight text-base md:text-[17px]">
              How soon after requesting a self-exclusion will it be activated?
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              We will endeavour to apply your exclusion as soon as practically
              possible. Normally, we will be able to reset your password to
              prevent you accessing the Site within
              <strong>24 hours </strong> of your request.
            </p>
            <h2 className="text-text_Ternary font-lato font-[600] leading-tight text-base md:text-[17px]">
              What happens if I self-exclude?
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              We will make all reasonable efforts to:
            </p>
            <ol className="mt-1 mb-1 list-decimal leading-tight pl-6">
              <li className="text-justify">
                Prevent any marketing material being forwarded to you;
              </li>
              <li className="text-justify">
                Remove you from any marketing databases operated by us;
              </li>
              <li className="text-justify">
                Suspend your activity by cancelling your ability to access the
                Site for the period requested by you, or if no period is
                requested by you, for the Minimum Period;
              </li>
              <li className="text-justify">
                Permanently close your Customer Account if instructed to do so
                by you, and return all funds owed to you to your nominated bank
                account.
              </li>
            </ol>
            <h2 className="text-text_Ternary mt-2 font-lato font-[600] leading-tight text-base md:text-[17px]">
              Can I re-activate my Account or open a new Account during the
              self-exclusion period?
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              Accounts that have been self-excluded cannot be reactivated under
              any circumstances until the expiry of the self-exclusion period.
            </p>
            <p className="mt-1 mb-1 text-justify leading-tight">
              During the period of your exclusion, you must not attempt to
              re-open any existing Account(s), seek to open any new Accounts or
              seek to place bets through any other customer’s Account.
            </p>
            <h2 className="text-text_Ternary mt-2 font-lato font-[600] leading-tight text-base md:text-[17px]">
              If I would like to re-activate my Account, is this possible?
            </h2>
            <p className="mt-1 mb-1 text-justify leading-tight">
              At the end of the self-exclusion period, you must contact us in
              person and confirm such intention in writing. If it is decided (in
              the Site’s absolute discretion) to permit you to re-open your
              Account/open a new Account, you should be aware that a{" "}
              <strong>24-hour</strong>waiting period will be imposed prior to
              the Account being available for use.
            </p>
          </div>
        </div>
      </div>
      <RightDeskSidebar />
    </div>
  );
};

export default ExclusivePolicy;
