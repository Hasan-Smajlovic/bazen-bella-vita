import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function Seo({ title, description, url, image }: Props) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setProperty = (prop: string, value?: string) => {
      if (!value) return;
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("description", description);
    setProperty("og:title", title || document.title);
    setProperty("og:description", description || "");
    if (url) setProperty("og:url", url);
    if (image) {
      setProperty("og:image", image);
      setMeta("twitter:image", image);
    }

    // canonical
    if (url) {
      let link = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    }
  }, [title, description, url, image]);

  return null;
}
