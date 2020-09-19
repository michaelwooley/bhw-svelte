import fetchMock from "fetch-mock";
import { weatherLatest } from "./weather";
import StationObservationsLatest from "@app/test/data/station-observations-latest.json";

describe("Weather API", () => {
  const stationId = "KBVI";

  describe("Latest station data (weatherLatest)", () => {
    it("can run", async (done) => {
      fetchMock.mock(
        `https://api.weather.gov/stations/${stationId}/observations/latest`,
        {
          body: StationObservationsLatest,
          status: 200,
        }
      );

      const res = await weatherLatest(stationId);

      expect(res).toBeDefined();

      fetchMock.restore();
      done();
    });

    it("bad id", async (done) => {
      expect.assertions(1);
      const badStationId = stationId + "a";
      fetchMock.mock(
        `https://api.weather.gov/stations/${badStationId}/observations/latest`,
        {
          body: {
            correlationId: "74f9abae",
            title: "Not Found",
            type: "https://api.weather.gov/problems/NotFound",
            status: 404,
            detail: "Not Found",
            instance: "https://api.weather.gov/requests/74f9abae",
          },
          status: 404,
        }
      );

      try {
        const res = await weatherLatest(badStationId);
      } catch (e) {
        expect(e.message).toBeDefined();
      } finally {
        fetchMock.restore();
        done();
      }
    });
  });
});
