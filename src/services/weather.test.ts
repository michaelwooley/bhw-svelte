import StationObservationsLatest from "@app/test/data/station-observations-latest.json";
import StationObservationsHistorical from "@app/test/data/station-observations.json";
import fetchMock from "fetch-mock";
import { weatherHistorical, weatherLatest } from "./weather";

describe("Weather API", () => {
  const stationId = "KBVI";
  const BASE_URL = "https://api.weather.gov";

  describe("Latest station data (weatherLatest)", () => {
    it("can run", async (done) => {
      fetchMock.mock(`${BASE_URL}/stations/${stationId}/observations/latest`, {
        body: StationObservationsLatest,
        status: 200,
      });

      const res = await weatherLatest(stationId);

      expect(res).toBeDefined();

      fetchMock.restore();
      done();
    });

    it("bad id", async (done) => {
      expect.assertions(1);
      const badStationId = stationId + "a";
      fetchMock.mock(
        `${BASE_URL}/stations/${badStationId}/observations/latest`,
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

  describe("Station observations data (weatherHistorical)", () => {
    it("can run", async (done) => {
      const limit = 25;

      fetchMock.mock(
        `${BASE_URL}/stations/${stationId}/observations?limit=${limit}`,
        {
          body: StationObservationsHistorical,
          status: 200,
        }
      );

      const res = await weatherHistorical(stationId, limit);

      expect(res).toBeDefined();

      fetchMock.restore();
      done();
    });

    it("bad id", async (done) => {
      expect.assertions(1);
      const badStationId = stationId + "a";
      fetchMock.mock(
        `${BASE_URL}/stations/${badStationId}/observations?limit=50`,
        {
          status: 200,
        }
      );

      try {
        await weatherHistorical(badStationId);
      } catch (e) {
        expect(e.message).toBeDefined();
      } finally {
        fetchMock.restore();
        done();
      }
    });
  });
});
