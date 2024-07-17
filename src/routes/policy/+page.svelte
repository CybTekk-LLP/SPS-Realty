<script lang="ts">
    import { page } from "$app/stores";
    import { Typography } from "$lib/ui";

    $: query = new URL($page.url).searchParams.get("query");
    let heading = "";
    let body = "";
    $: switch (query) {
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
