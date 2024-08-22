<script lang="ts">
  import { Button, Input, Typography } from "$lib/ui";
  let name: string,
    email: string,
    resume: string,
    role: string,
    years: string,
    money: string,
    message: string;

  const mailTo = (
    name: string,
    email: string,
    resume: string,
    role: string,
    years: string,
    money: string,
    message: string
  ) => {
    let anchor = document.createElement("a");
    anchor.href = `mailto:info@spsrealty.in?subject=Hey, this is ${name} and I wanted to know more about careers at SPS&body=Hi,I found this careers website and wanted to share this message: ${message}. I want to apply for the ${role} role and expect a package of ${money} (in INR), and I have ${years} years of experience. I am adding my resume link ${resume} and email ${email} here and hope to get responded soon.`;
    anchor.click();
    anchor.remove();
  };
</script>

<form action="javascript:void(0)">
  <h1>
    <Typography type="subheading" _color="var(--secondary-900)"
      >Apply for a career at SPS!</Typography
    >
  </h1>
  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "text" }}
    l10n={{ label: "Name", placeholder: "Marvin McKinney" }}
    bind:value={name}
  />
  <div class="spacer" aria-hidden="true"></div>

  <Input
    args={{
      variant: "text",
    }}
    l10n={{
      label: "Email",
      placeholder: "youremail@gmail.com",
      errorLabel: "invalid email",
    }}
    handlers={{
      // @ts-ignore
      validate: (value) => {
        return value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<div>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      },
    }}
    bind:value={email}
  />
  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "text" }}
    l10n={{ label: "Link to resume", placeholder: "Google drive link" }}
    bind:value={resume}
  />
  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "text" }}
    l10n={{ label: "Role", placeholder: "eg Marketing lead" }}
    bind:value={role}
  />
  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "text" }}
    l10n={{ label: "Years of experience", placeholder: "eg 3" }}
    bind:value={years}
  />
  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "text" }}
    l10n={{ label: "Expected Package", placeholder: "eg 95 LPA" }}
    bind:value={money}
  />

  <div class="spacer" aria-hidden="true"></div>
  <Input
    args={{ variant: "textarea" }}
    l10n={{ label: "Custom Message", placeholder: "Write a message" }}
    bind:value={message}
  />

  <div class="spacer" aria-hidden="true"></div>
  <div class="btn">
    <Button
      args={{ variant: "primary" }}
      l10n={{ buttonLabel: "Submit" }}
      handlers={{
        click: () => mailTo(name, email, resume, role, years, money, message),
      }}
    />
  </div>
</form>
<div class="spacer" aria-hidden="true"></div>
<br />

<style lang="scss">
  form {
    inline-size: 90%;
    max-inline-size: 600px;
    margin-inline: auto;
    padding: 0 30px;
    margin-block-end: 5rem;
  }

  .spacer {
    margin-block: 10px;
  }
</style>
