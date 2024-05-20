export type LocationBody = {
  data: {
    location: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
    };
  };
};

async function fetchLocation() {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "apikey",
      "ipb_live_bALVBYev8uDaTAvmMlzIj2OdznMJHsg2bpyNBhxM",
    );

    const res = await fetch("https://api.ipbase.com/v2/info", {
      cache: "no-cache",
      headers,
    });
    if (!res.ok) {
      await Promise.reject(
        new Error(`quote fetch error: ${res.status} - ${res.statusText}`),
      );
    }

    const json: LocationBody = await res.json();

    return json.data.location;
  } catch (err) {
    console.error("err", err);
  }
}

export default fetchLocation;
