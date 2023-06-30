--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: weapons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.weapons (
    id integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    price text NOT NULL,
    damage text NOT NULL,
    weight text NOT NULL
);


--
-- Name: weapons_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.weapons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: weapons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.weapons_id_seq OWNED BY public.weapons.id;


--
-- Name: weapons id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.weapons ALTER COLUMN id SET DEFAULT nextval('public.weapons_id_seq'::regclass);


--
-- Data for Name: weapons; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.weapons VALUES (1, 'Espada de ouro', 'marcial', '15 po', '1d10', 'leve');
INSERT INTO public.weapons VALUES (5, 'Espada de ouro', 'marcial', '12 po', '2d6', 'leve');


--
-- Name: weapons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.weapons_id_seq', 6, true);


--
-- Name: weapons weapons_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.weapons
    ADD CONSTRAINT weapons_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

