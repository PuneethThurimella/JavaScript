async function fetchFromUrls(urls) {
  const requests = urls.map(url => fetch(url));
  const results = await Promise.allSettled(requests);
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Data from URL ${index + 1}:`, result.value);
    } else {
      console.error(`Failed to fetch URL ${index + 1}:`, result.reason);
    }
  });
}

