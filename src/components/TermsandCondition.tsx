"use client";
import React, { useState, useEffect, useRef } from "react";

const TermsAndConditions: React.FC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const element = contentRef.current;
    if (!element) return;

    const scrollBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight;
    if (scrollBottom < 1) {
      setIsButtonActive(true);
    }
  };

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="mb-4 font-bold text-xl">Ajouter une catégorie :</div>
      <div className="flex flex-col items-center  h-screen ">
        <div
          ref={contentRef}
          className="overflow-y-scroll h-96 w-1/2 p-4 border border-gray-300 rounded-lg bg-slate-50"
          onScroll={handleScroll}
        >
          <div>
            <p>
              <span style={{ fontSize: "26pt" }}>
                Consentement éclairé pour l'utilisation de l'application web de
                gestion de patients PSP BI MSH :
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>
                <u>
                  <span style={{ fontSize: "11pt" }}>
                    En acceptant et en utilisant l'application web de gestion de
                    patients PSP BI MSH, vous consentez de manière éclairée aux
                    termes et conditions suivants :
                  </span>
                </u>
              </strong>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                1. Objectif de l'Application :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                En utilisant PSP BI MSH, vous consentez à l'utilisation de cette
                application web dans le but spécifique de gérer les informations
                relatives aux patients, y compris mais sans s'y limiter, les
                dossiers médicaux, les rendez-vous, les prescriptions, et autres
                données pertinentes liées à la santé.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                2. Confidentialité et Sécurité :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous reconnaissez que les informations personnelles et médicales
                des patients sont hautement confidentielles. PSP BI MSH s'engage
                à mettre en place des mesures de sécurité robustes pour protéger
                ces données contre tout accès non autorisé, perte, divulgation,
                ou altération.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                3. Accès Restreint :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous acceptez de ne pas partager vos informations d'accès à
                l'application avec des tiers non autorisés. Tout accès ou
                utilisation non autorisé est strictement interdit.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                4. Responsabilités de l'Utilisateur :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous comprenez et acceptez que vous êtes entièrement responsable
                de l'exactitude, de la légalité et de la pertinence des données
                que vous saisissez dans l'application. PSP BI MSH décline toute
                responsabilité découlant de l'utilisation inappropriée ou
                frauduleuse de l'application.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                5. Mises à Jour et Modifications :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à recevoir des mises à jour régulières de
                l'application pour assurer son bon fonctionnement et bénéficier
                des dernières fonctionnalités. PSP BI MSH se réserve le droit de
                modifier les fonctionnalités de l'application, les termes et
                conditions, et toute autre information associée.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                6. Droit à la Vie Privée :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à ce que PSP BI MSH collecte, stocke et traite
                vos données conformément à sa politique de confidentialité. Vous
                avez le droit de demander l'accès à vos données personnelles et
                de demander des corrections si nécessaire.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                7. Communication :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à recevoir des communications, notifications et
                alertes de la part de PSP BI MSH liées à l'utilisation de
                l'application, y compris des informations importantes sur la
                sécurité et les mises à jour.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                8. Révocation du Consentement :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous avez le droit de retirer votre consentement à tout moment
                en désinstallant l'application et en cessant de l'utiliser.
                Cependant, cela peut entraîner la résiliation de votre accès à
                certaines fonctionnalités de l'application.
              </span>
            </p>
            <p>
              <br />
            </p>
            <h3>
              <strong>
                <span
                  style={{ color: "#434343", fontSize: "13.999999999999998pt" }}
                >
                  En acceptant ces termes, vous confirmez avoir lu, compris et
                  consentez volontairement à utiliser l'application web de
                  gestion de patients PSP BI MSH conformément à ces conditions.
                  Vous reconnaissez également que votre utilisation de
                  l'application est soumise aux lois et réglementations en
                  vigueur.
                </span>
              </strong>
            </h3>
          </div>
        </div>
        <button
          className={`mt-4 px-6 py-2 rounded text-white font-bold ${
            isButtonActive ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500"
          }`}
          disabled={!isButtonActive}
        >
          Agree
        </button>
      </div>
    </>
  );
};

export default TermsAndConditions;
