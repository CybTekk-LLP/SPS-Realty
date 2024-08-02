<script lang="ts">
  import { page } from "$app/stores";
  import { Typography } from "$lib/ui";

  $: query = new URL($page.url).searchParams.get("query");
  let heading = "";
  let body = "";
  $: switch (query) {
    case "terms":
      heading = "Terms and Conditions";
      body = `<p>Welcome to our website. These Terms and Conditions ("Terms") govern your use of our Site. By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Site.</p>
        <br>
        <h4>1. Eligibility</h4>
        <p>You must be at least 18 years old to use this Site.</p>
        <br>
        <h4>2. License to Use the Site</h4>
        <p>We grant you a non-exclusive, non-transferable, revocable license to access and use the Site for personal or business use in accordance with these Terms.</p>
        <br>
        <h4>3. Prohibited Activities</h4>
        <p>You agree not to violate any laws or regulations, use the Site for any unauthorized purpose, disrupt or interfere with the Site's security or performance, or copy, modify, or distribute any content from the Site without our permission.</p>
        <br/>
        <h4>4. Submissions</h4>
        <p>If you submit any content to the Site, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and distribute such content.</p>
        <br>
        <h4>5. Prohibited Content</h4>
        <p>You agree not to submit content that is illegal, offensive, or infringes on the rights of others.</p>
        <br/>
        <h4>6. Disclaimers</h4>
        <p>The Site is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, about the Site's accuracy, reliability, or availability.</p>
        <br/>
        <h4>7. Limitation of Liability</h4>
        <p>To the maximum extent permitted by law, we will not be liable for any indirect, incidental, or consequential damages arising out of your use of the Site.</p>
        <br/>
        <p>Thank you for your cooperation and commitment to maintaining a safe and respectful work environment.</p>`;
      break;
    case "policy":
      heading = "Privacy Policy";
      body = `<p>Our company is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.spsrealty.in, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
        <br>
        <h4>1. Personal Data</h4>
        <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
        <br>
        <h4>2. Derivative Data</h4>
        <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
        <br>
        <h4>3. Financial Data</h4>
        <p>Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, [Payment Processor], and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</p>
        <br>
        <h4>4. Mobile Device Data</h4>
        <p>Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.</p>
        <br>
        <h4>5. Third-Party Data</h4>
        <p>Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.</p>
        <br>
        <p>Thank you for your cooperation and commitment to maintaining a safe and respectful work environment.</p>`;
      break;
    case "conduct":
      heading = "Code of Conduct";
      body = `<p>Welcome to our construction site. We are committed to maintaining a safe and respectful environment for everyone. This Code of Conduct outlines our expectations for all employees, contractors, and visitors.</p>
        <br>
        <h4>1. Safety First</h4>
        <p>Your safety is our top priority. Always follow safety protocols and wear appropriate personal protective equipment (PPE). Report any unsafe conditions or incidents immediately.</p>
        <br>
        <h4>2. Respectful Behavior</h4>
        <p>We expect everyone to treat each other with respect and dignity. Harassment, discrimination, and bullying will not be tolerated.</p>
        <br>
        <h4>3. Professionalism</h4>
        <p>Maintain a professional attitude and work ethic. Be punctual, reliable, and perform your duties to the best of your ability.</p>
        <br>
        <h4>4. Cleanliness and Organization</h4>
        <p>Keep the worksite clean and organized. Dispose of waste properly and keep tools and materials in their designated areas.</p>
        <br>
        <h4>5. Compliance with Laws and Regulations</h4>
        <p>Follow all applicable laws, regulations, and company policies. This includes health and safety regulations, environmental guidelines, and building codes.</p>
        <br>
        <h4>6. Reporting Violations</h4>
        <p>If you witness any violations of this Code of Conduct, report them to your supervisor or site manager immediately. All reports will be taken seriously and handled confidentially.</p>
        <br>
        <p>Thank you for your cooperation and commitment to maintaining a safe and respectful work environment.</p>`;
      break;
    case "risk":
      heading = "Risk Management Policy";
      body = `<p>Our construction site is dedicated to identifying, assessing, and managing risks to ensure the safety and well-being of all personnel. This Risk Management Policy outlines our approach to managing potential hazards and mitigating risks.</p>
    <br>
    <h4>1. Risk Assessment</h4>
    <p>Conduct regular risk assessments to identify potential hazards. Evaluate the likelihood and impact of each risk and prioritize them accordingly.</p>
    <br>
    <h4>2. Risk Mitigation</h4>
    <p>Implement appropriate measures to mitigate identified risks. This may include using safer materials, altering work processes, or providing additional training to staff.</p>
    <br>
    <h4>3. Emergency Preparedness</h4>
    <p>Develop and maintain an emergency response plan. Ensure all personnel are familiar with emergency procedures and conduct regular drills to practice response actions.</p>
    <br>
    <h4>4. Continuous Monitoring</h4>
    <p>Regularly monitor the effectiveness of risk management measures. Update risk assessments and mitigation strategies as necessary to address new or evolving risks.</p>
    <br>
    <h4>5. Training and Awareness</h4>
    <p>Provide ongoing training to employees on risk management practices. Encourage a culture of safety where everyone is aware of potential risks and their role in managing them.</p>
    <br>
    <h4>6. Reporting and Communication</h4>
    <p>Establish clear channels for reporting risks and hazards. Ensure open communication between all levels of staff regarding risk management practices and updates.</p>
    <br>
    <p>By adhering to this Risk Management Policy, we aim to create a safe and secure environment for all our construction projects.</p>`;
      break;

    case "vigil":
      heading = "Vigil Mechanism Policy";
      body = `<p>Our organization is committed to maintaining the highest standards of integrity and accountability. The Vigil Mechanism Policy provides a framework for reporting unethical behavior, violations of company policies, and other misconduct.</p>
    <br>
    <h4>1. Purpose</h4>
    <p>The purpose of this policy is to enable employees, contractors, and other stakeholders to report concerns about unethical behavior, actual or suspected fraud, and violation of the company's code of conduct.</p>
    <br>
    <h4>2. Reporting Mechanism</h4>
    <p>Reports can be made confidentially through designated channels such as email, hotline, or a secure online portal. The identity of the whistleblower will be protected to the fullest extent possible.</p>
    <br>
    <h4>3. Protection Against Retaliation</h4>
    <p>The company ensures that anyone who reports a concern in good faith will not face retaliation or harassment. Any form of retaliation against whistleblowers will be subject to disciplinary action.</p>
    <br>
    <h4>4. Investigation Process</h4>
    <p>All reported concerns will be investigated promptly and thoroughly. The investigation will be conducted impartially, and appropriate corrective actions will be taken if necessary.</p>
    <br>
    <h4>5. Confidentiality</h4>
    <p>All reports and investigations will be kept confidential to the extent possible, consistent with the need to conduct an adequate investigation.</p>
    <br>
    <h4>6. Awareness and Training</h4>
    <p>Regular training sessions will be conducted to ensure that employees are aware of the Vigil Mechanism Policy and the procedures for reporting concerns.</p>
    <br>
    <p>We encourage everyone to report any concerns without fear of retaliation, knowing that their reports will be handled with the utmost seriousness and confidentiality.</p>`;
      break;
    case "posh":
      heading = "Prevention of Sexual Harassment (POSH) Policy";
      body = `<p>Our organization is committed to creating a safe and respectful workplace for all employees. The Prevention of Sexual Harassment (POSH) Policy outlines our zero-tolerance approach to sexual harassment and provides guidelines for reporting and addressing such incidents.</p>
    <br>
    <h4>1. Policy Statement</h4>
    <p>We are dedicated to providing a work environment free from sexual harassment. Any form of sexual harassment, whether verbal, physical, or visual, is strictly prohibited.</p>
    <br>
    <h4>2. Definition of Sexual Harassment</h4>
    <p>Sexual harassment includes unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature that creates an intimidating, hostile, or offensive work environment.</p>
    <br>
    <h4>3. Reporting Mechanism</h4>
    <p>Employees can report incidents of sexual harassment to the Internal Complaints Committee (ICC) via email, hotline, or a secure online portal. All reports will be handled confidentially.</p>
    <br>
    <h4>4. Internal Complaints Committee (ICC)</h4>
    <p>The ICC is responsible for investigating and addressing complaints of sexual harassment. The committee comprises trained members who will handle each case with sensitivity and confidentiality.</p>
    <br>
    <h4>5. Investigation Process</h4>
    <p>All complaints will be investigated promptly and thoroughly. The ICC will take appropriate action based on the findings of the investigation, which may include disciplinary action against the perpetrator.</p>
    <br>
    <h4>6. Protection Against Retaliation</h4>
    <p>The organization ensures that anyone who reports sexual harassment in good faith will not face retaliation or harassment. Any form of retaliation against complainants or witnesses will be subject to disciplinary action.</p>
    <br>
    <h4>7. Awareness and Training</h4>
    <p>Regular training sessions will be conducted to educate employees about sexual harassment, their rights, and the reporting mechanisms. We aim to foster a culture of respect and dignity.</p>
    <br>
    <p>We encourage all employees to report any incidents of sexual harassment, knowing that their complaints will be handled with the utmost seriousness and confidentiality.</p>`;
      break;
    default:
      heading = "";
      body = "";
  }
</script>

<div>
  <h1>
    <Typography type="subheading" _color="var(--secondary-900)"
      >{heading}</Typography
    >
  </h1>
  <p>
    <Typography type="subheading" _color="var(--secondary-900)"
      >{@html body}</Typography
    >
  </p>
</div>
<br /><br /><br />

<style lang="scss">
  div {
    inline-size: 90%;
    max-inline-size: 1200px;
    margin-inline: auto;
    padding: 0 30px;
  }

  .spacer {
    margin-block: 10px;
  }
</style>
