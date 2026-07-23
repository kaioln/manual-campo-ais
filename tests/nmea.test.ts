import { describe, expect, it } from "vitest";
import { calculateChecksum, checksumForSentence, parseSentence } from "../src/utilities/nmea";

describe("checksum IEC 61162/NMEA", () => {
  it("calcula o exemplo clássico GGA", () => {
    const body = "GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,";
    expect(calculateChecksum(body)).toBe("47");
    expect(checksumForSentence(`$${body}*47`)).toBe("47");
  });

  it("identifica checksum inválido", () => {
    const parsed = parseSentence("$GPHDT,123.4,T*00");
    expect(parsed.checksumValid).toBe(false);
    expect(parsed.formatter).toBe("HDT");
  });

  it("separa campos AIVDM multipartes", () => {
    const body = "AIVDM,2,1,7,A,55NBsv02;R@4L@E>221@E=B1HE=<Dh0000000016?4pN4@E53,0";
    const parsed = parseSentence(`!${body}*${calculateChecksum(body)}`);
    expect(parsed.checksumValid).toBe(true);
    expect(parsed.talker).toBe("AI");
    expect(parsed.formatter).toBe("VDM");
    expect(parsed.fields[0]?.value).toBe("2");
    expect(parsed.supportedByFa150).toBe("saída");
  });

  it("rejeita entrada sem delimitador", () => {
    const parsed = parseSentence("GPHDT,10.0,T*00");
    expect(parsed.structuralErrors.length).toBeGreaterThan(0);
    expect(parsed.calculatedChecksum).toBeNull();
  });
});

