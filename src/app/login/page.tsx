// import { login, signup } from "./actions";

import PageLayout from "@/features/layouts/PageLayout";

export default function LoginPage() {
  return (
    <PageLayout>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </form>
    </PageLayout>
  );
}
