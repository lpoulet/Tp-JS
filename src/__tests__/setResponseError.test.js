import {
    STATUS_HTTP,
    STATUS_API,
    STATUS_HTTP_MESSAGES,
    setResponseError,
  } from "../setResponseError";
  
  describe("setResponseError fonction", () => {
    test("dois retourner un warning en reponse", () => {
      const response = {
        status: STATUS_API.WARNING + "01",
        anomaly: {
          label: "Je suis un Warning",
          detail: "Je suis un Warning",
        },
      };
  
      const result = setResponseError({ response });
      expect(result.label).toBe("Je suis un Warning");
      expect(result.detail).toBe("Je suis un Warning");
      expect(result.type).toBe("danger");
      expect(result.iconName).toBe("alert");
    });
  
    test("dois renvoyer une réponse d'erreur", () => {
      const response = {
        status: STATUS_API.ERROR + "01",
        anomaly: {
          label: "Je suis une erreur",
          detail: "Je suis une erreur",
        },
      };
  
      const result = setResponseError({ response });
  
      expect(result.label).toBe("Je suis une erreur");
      expect(result.detail).toBe("Je suis une erreur");
      expect(result.type).toBeUndefined(); // Pas de type pour une erreur
      expect(result.iconName).toBeUndefined(); // Pas d icone pour les erreurs
    });
  
    test("Dois retourner un objet vide quand success car pas erreur", () => {
      const response = {
        status: STATUS_HTTP.SUCCESS,
        anomaly: {
          label: "Success",
          detail: "Success",
        },
      };
      const result = setResponseError({ response });
      expect(result).toEqual({});
    });
  });
  
  describe("Constants", () => {
    test("Test des bon code de retour http", () => {
      expect(STATUS_HTTP.SUCCESS).toBe(200);
      expect(STATUS_HTTP.CREATED).toBe(201);
    });
  
    test("dois avoir les bonnes valeurs pour status_api", () => {
      expect(STATUS_API.SUCCESS).toBe(STATUS_HTTP.SUCCESS);
      expect(STATUS_API.CREATED).toBe(STATUS_HTTP.CREATED);
    });
  test("dois contenir les messages corrects pour STATUS_HTTP_MESSAGES", () => {
      expect(STATUS_HTTP_MESSAGES[STATUS_HTTP.SUCCESS]).toBe(
        "Succès: La requête a réussi"
      );
      expect(STATUS_HTTP_MESSAGES[STATUS_HTTP.CREATED]).toBe(
        "Succès: Création réussie"
      );
    });
  });