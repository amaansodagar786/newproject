import React from 'react';
import './Insurance.scss';
import image1 from '../../../Images/insurance1.jpg';
import image2 from '../../../Images/insurance2.jpg';
import image3 from '../../../Images/insurance3.webp';
import image4 from '../../../Images/insurance4.jpg';
import image5 from '../../../Images/insurance5.jpg';

const Insurance = () => {
  return (
    <>
      <div className='insurance-related'>
        <h1>INSURANCE MANAGEMENT</h1>
      </div>
      <div className="insurance-section">
        <div className="insurance-item">
          <div className="insurance-image">
            <img src={image1} alt="Motor Insurance" />
          </div>
          <div className="insurance-content">
            <p><b>MOTOR INSURANCE</b><br /><br />
              Motor Insurance safeguards your vehicle against any financial loss that may occur in case of an accident or any event unfortunate. It is a contract between the vehicle owner and the insurance company for protecting the interest of the policyholder against monetary loss due to vehicle damage.<br /><br />
              The roads are uncertain and keeping this in mind, vehicle insurance has been made mandatory in India. Owning a vehicle is exciting but it is also important to keep it secured with insurance given the rise of vehicles on the roads and accidents as well. A motor insurance policy comes to rescue when and lowers the cost of damage or repair significantly.</p>
          </div>
        </div>

        <div className="insurance-item">
          <div className="insurance-content">
            <p><b>HEALTH INSURANCE</b><br /><br />
              Health Insurance is a medical insurance policy that offers financial coverage for medical expenses when the policyholder is hospitalised. The health insurance plan ensures cashless treatment, reimbursement of medical expenses & day-care hospitalisation. Moreover, health insurance cost is subsidized to the policy holder in form of tax exemption under section 80D of Income Tax Act, 1961.<br /><br />
              Life insurance plans are characterised by the fact that they pay a benefit on death of the insured. The most popular plans have a fixed period of time for which the policy is in force, and death benefit will be paid. Term Life, Endowment, ULIPs, Pension Plans, and Child Plans all have fixed terms. On the other hand, Whole Life Plans offer cover for the entire lifetime.
            </p></div>
          <div className="insurance-image">
            <img src={image2} alt="Health Insurance" />
          </div>
        </div>

        <div className="insurance-item">
          <div className="insurance-image">
            <img src={image3} alt="Transit Insurance" />
          </div>
          <div className="insurance-content">
            <p><b>TRANSIT INSURANCE</b><br /><br />
              Transit insurance provides a policy that includes compensation against common perils that might cause damage to the items that are being transported.</p>
          </div>
        </div>

        <div className="insurance-item">
          <div className="insurance-content">
            <p><b>ACCIDENT INSURANCE</b><br /><br />
              Personal Accident Insurance offers financial compensation in the event of bodily injuries leading to total/partial disability or death caused due to accidents. This policy ensures the financial stability of an individual and his family if he/she gets injured or unfortunately dies in an accident.
            </p>
          </div>
          <div className="insurance-image">
            <img src={image4} alt="Accident Insurance" />
          </div>
        </div>

        <div className="insurance-item">
          <div className="insurance-image">
            <img src={image5} alt="Portfolio Management" />
          </div>
          <div className="insurance-content">
            <p><b>PORTFOLIO MANAGEMENT</b><br /><br />
              The portfolio is a collection of investment instruments like shares, mutual funds, bonds, FDs and other cash equivalents, etc. Portfolio management is the art of selecting the right investment tools in the right proportion to generate optimum returns with a balance of risk from the investment made.<br /><br />
             </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insurance;
