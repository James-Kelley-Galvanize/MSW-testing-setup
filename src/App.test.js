import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe(`My App`, function () {
  it(`Should render items based on API response`, async function () {
    // render the app
    render(<App />);

    //wait for the API call to complete, and the data to come back and change the rendered component
    const correctElement = await waitFor(() =>
      screen.getByText(/Camo Onesie, but it's for a Dog/i)
    );
    // expect that the element eventually has shown up
    expect(correctElement).toBeInTheDocument();
  });
});
