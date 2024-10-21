-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2024 at 10:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdunitracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `classe`
--

CREATE TABLE `classe` (
  `id_classe` int(11) NOT NULL,
  `annee_classe` int(11) NOT NULL,
  `nom_classe` varchar(255) DEFAULT NULL,
  `num_classe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe`
--

INSERT INTO `classe` (`id_classe`, `annee_classe`, `nom_classe`, `num_classe`) VALUES
(1, 1, 'TI', 1),
(2, 1, 'TI', 2),
(3, 1, 'TI', 3),
(4, 1, 'TI', 4),
(5, 1, 'TI', 5),
(6, 1, 'TI', 6),
(7, 2, 'DSI', 1),
(8, 2, 'DSI', 2),
(9, 3, 'DSI', 1),
(10, 3, 'DSI', 2),
(11, 2, 'RSI', 1),
(12, 3, 'RSI', 1),
(13, 2, 'SEM', 1),
(14, 3, 'SEM', 1);

-- --------------------------------------------------------

--
-- Table structure for table `classe_matiere`
--

CREATE TABLE `classe_matiere` (
  `matiere_id` int(11) NOT NULL,
  `classe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_matiere`
--

INSERT INTO `classe_matiere` (`matiere_id`, `classe_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 7),
(25, 7),
(26, 7),
(27, 7),
(28, 7),
(29, 7),
(30, 7),
(31, 7),
(32, 7),
(33, 7),
(34, 7),
(35, 7),
(36, 7),
(37, 7),
(38, 7),
(39, 7),
(40, 7),
(41, 7),
(42, 7),
(43, 7),
(44, 7),
(45, 7),
(46, 7),
(47, 7),
(48, 7),
(49, 7),
(50, 7),
(51, 9),
(52, 9),
(53, 9),
(54, 9),
(55, 9),
(56, 9),
(57, 9),
(58, 9),
(59, 9),
(60, 9),
(61, 9),
(62, 9),
(63, 9),
(64, 9),
(65, 9),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 8),
(25, 8),
(26, 8),
(27, 8),
(28, 8),
(29, 8),
(30, 8),
(31, 8),
(32, 8),
(33, 8),
(34, 8),
(35, 8),
(36, 8),
(37, 8),
(38, 8),
(39, 8),
(40, 8),
(41, 8),
(42, 8),
(43, 8),
(44, 8),
(45, 8),
(46, 8),
(47, 8),
(48, 8),
(49, 8),
(50, 8),
(51, 10),
(52, 10),
(53, 10),
(54, 10),
(55, 10),
(56, 10),
(57, 10),
(58, 10),
(59, 10),
(60, 10),
(61, 10),
(62, 10),
(63, 10),
(64, 10),
(65, 10),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 3),
(14, 3),
(15, 3),
(16, 3),
(17, 3),
(18, 3),
(19, 3),
(20, 3),
(21, 3),
(22, 3),
(23, 3),
(1, 4),
(2, 4),
(3, 4),
(4, 4),
(5, 4),
(6, 4),
(7, 4),
(8, 4),
(9, 4),
(10, 4),
(11, 4),
(12, 4),
(13, 4),
(14, 4),
(15, 4),
(16, 4),
(17, 4),
(18, 4),
(19, 4),
(20, 4),
(21, 4),
(22, 4),
(23, 4),
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(5, 5),
(6, 5),
(7, 5),
(8, 5),
(9, 5),
(10, 5),
(11, 5),
(12, 5),
(13, 5),
(14, 5),
(15, 5),
(16, 5),
(17, 5),
(18, 5),
(19, 5),
(20, 5),
(21, 5),
(22, 5),
(23, 5),
(1, 6),
(2, 6),
(3, 6),
(4, 6),
(5, 6),
(6, 6),
(7, 6),
(8, 6),
(9, 6),
(10, 6),
(11, 6),
(12, 6),
(13, 6),
(14, 6),
(15, 6),
(16, 6),
(17, 6),
(18, 6),
(19, 6),
(20, 6),
(21, 6),
(22, 6),
(23, 6);

-- --------------------------------------------------------

--
-- Table structure for table `classe_seq`
--

CREATE TABLE `classe_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_seq`
--

INSERT INTO `classe_seq` (`next_val`) VALUES
(15);

-- --------------------------------------------------------

--
-- Table structure for table `completion`
--

CREATE TABLE `completion` (
  `id_completion` int(11) NOT NULL,
  `complexite` tinyint(4) DEFAULT NULL,
  `marquer` bit(1) NOT NULL,
  `id_etd` int(11) DEFAULT NULL,
  `id_tache` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `completion_seq`
--

CREATE TABLE `completion_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `completion_seq`
--

INSERT INTO `completion_seq` (`next_val`) VALUES
(NULL);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `adresse_etd` varchar(255) DEFAULT NULL,
  `cin_etd` varchar(255) DEFAULT NULL,
  `email_etd` varchar(255) DEFAULT NULL,
  `mot_de_passe_etd` varchar(255) DEFAULT NULL,
  `nom_etd` varchar(255) DEFAULT NULL,
  `prenom_etd` varchar(255) DEFAULT NULL,
  `redoublant` bit(1) NOT NULL,
  `sexe_etd` varchar(255) DEFAULT NULL,
  `telephone_etd` varchar(255) DEFAULT NULL,
  `id_classe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `adresse_etd`, `cin_etd`, `email_etd`, `mot_de_passe_etd`, `nom_etd`, `prenom_etd`, `redoublant`, `sexe_etd`, `telephone_etd`, `id_classe`) VALUES
(1, NULL, NULL, 'std1@gmail.com', 'Password1', 'std1', 'student1', b'0', NULL, NULL, 1),
(2, NULL, NULL, 'std2@gmail.com', 'Password2', 'std2', 'student2', b'0', NULL, NULL, 2),
(3, NULL, NULL, 'std3@gmail.com', 'Password3', 'std3', 'student3', b'0', NULL, NULL, 3),
(4, NULL, NULL, 'std4@gmail.com', 'Password4', 'std4', 'student4', b'0', NULL, NULL, 4),
(5, NULL, NULL, 'std5@gmail.com', 'Password5', 'std5', 'student5', b'0', NULL, NULL, 5),
(6, NULL, NULL, 'std6@gmail.com', 'Password6', 'std6', 'student6', b'0', NULL, NULL, 6),
(7, NULL, NULL, 'std7@gmail.com', 'Password7', 'std7', 'student7', b'0', NULL, NULL, 7),
(8, NULL, NULL, 'std8@gmail.com', 'Password8', 'std8', 'student8', b'0', NULL, NULL, 8),
(9, NULL, NULL, 'std9@gmail.com', 'Password9', 'std9', 'student9', b'0', NULL, NULL, 9),
(10, NULL, NULL, 'std10@gmail.com', 'Password10', 'std10', 'student10', b'0', NULL, NULL, 10);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant_seq`
--

CREATE TABLE `etudiant_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etudiant_seq`
--

INSERT INTO `etudiant_seq` (`next_val`) VALUES
(11);

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` int(11) NOT NULL,
  `libelle_groupe` varchar(255) DEFAULT NULL,
  `matiere_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `libelle_groupe`, `matiere_id`) VALUES
(1, 'Groupe A', 1),
(2, 'Groupe B', 1),
(3, 'Groupe A', 2),
(4, 'Groupe B', 2),
(5, 'Groupe A', 3),
(6, 'Groupe B', 3),
(7, 'Groupe A', 4),
(8, 'Groupe B', 4),
(9, 'Groupe A', 5),
(10, 'Groupe B', 5),
(11, 'Groupe A', 6),
(12, 'Groupe B', 6);

-- --------------------------------------------------------

--
-- Table structure for table `groupe_creation`
--

CREATE TABLE `groupe_creation` (
  `etudiant_id` int(11) NOT NULL,
  `groupe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `groupe_seq`
--

CREATE TABLE `groupe_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupe_seq`
--

INSERT INTO `groupe_seq` (`next_val`) VALUES
(13);

-- --------------------------------------------------------

--
-- Table structure for table `matiere`
--

CREATE TABLE `matiere` (
  `id_matiere` int(11) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `semestre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `libelle`, `semestre`) VALUES
(1, 'Systèmes Logiques', '1'),
(2, 'Architecture des ordinateurs', '1'),
(3, 'Atelier Systèmes Logiques', '1'),
(4, 'Atelier Développement web et multimédia I', '1'),
(5, 'Développement web et multimédia I', '1'),
(6, 'Atelier Programmation', '1'),
(7, 'Algorithmique et programmation I', '1'),
(8, 'Atelier mathématiques appliquées', '1'),
(9, 'Mathématiques Appliquées', '1'),
(10, 'Certificat en compétence Numérique', '1'),
(11, 'Business culture', '1'),
(12, 'English for computing I', '1'),
(13, 'Technique d\'expression I', '1'),
(14, 'Introduction au Droit Informatique', '1'),
(15, 'Séminaires informatiques', '1'),
(16, 'Atelier systèmes I', '2'),
(17, 'Fondements des Réseaux', '2'),
(18, 'Systèmes d\'exploitation', '2'),
(19, 'Atelier Développement web et Multimédia II', '2'),
(20, 'Développement web et Multimédia II', '2'),
(21, 'Atelier programmation II', '2'),
(22, 'Algorithmique et programmation II', '2'),
(23, 'Statistiques et Probabilités', '2'),
(24, 'Recherche opérationelle', '1'),
(25, 'Préparation aux métiers', '1'),
(26, 'Techniques d\'expression II', '1'),
(27, 'English for computing II', '1'),
(28, 'Mini-Projet', '1'),
(29, 'TP_linux', '1'),
(30, 'Atelier programmation Objet (JAVA)', '1'),
(31, 'Programmation Objet (JAVA)', '1'),
(32, 'Modélisation Objet UML 2', '1'),
(33, 'Atelier Framework coté client (Angular)', '1'),
(34, 'Atelier Développement coté serveur (PHP)', '1'),
(35, 'Atelier Base de Données (SQL)', '1'),
(36, 'Bases de Données', '1'),
(37, 'Communication en entreprise', '1'),
(38, 'High tech english', '1'),
(39, 'Droit de l\'information et propriétés intellectuelles', '1'),
(40, 'Introduction IoT', '1'),
(41, 'Atelier Développement web avancé (CSS)', '1'),
(42, 'Programmation Objet Avancée (JAVA)', '2'),
(43, 'Atelier Programmation Objet Avancée (JAVA)', '2'),
(44, 'Projet d\'intégration', '2'),
(45, 'Atelier framework coté serveur (Symfony)', '2'),
(46, 'Atelier Environnement de Développement (SpringBoot)', '2'),
(47, 'Architecture logicielle', '2'),
(48, 'Atelier SGBD (SQL)', '2'),
(49, 'SGBD (SQL)', '2'),
(50, 'Préparation à la certification en français', '2'),
(51, 'Etude et management de projets innovants', '2'),
(52, 'Business english', '2'),
(53, 'Langage Python', '2'),
(54, 'Atelier Langage Python', '2'),
(55, 'Développement Mobile', '1'),
(56, 'Atelier Développement Mobile', '1'),
(57, 'Atelier Framework cross-platform (flutter)', '1'),
(58, 'SOA', '1'),
(59, 'Atelier SOA', '1'),
(60, 'Gestion des données Massives', '1'),
(61, 'Atelier Base de données Avancée', '1'),
(62, 'Méthodologie de conception Objet', '1'),
(63, 'Projet d\'integration', '1'),
(64, 'Preparing TOEIC', '1'),
(65, 'Technique de recherche d\'emploi et marketing de soi', '1');

-- --------------------------------------------------------

--
-- Table structure for table `matiere_professeur`
--

CREATE TABLE `matiere_professeur` (
  `matiere_id` int(11) NOT NULL,
  `professeur_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere_professeur`
--

INSERT INTO `matiere_professeur` (`matiere_id`, `professeur_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(10, 4),
(11, 5),
(12, 5),
(13, 6),
(14, 6),
(15, 7),
(16, 7),
(17, 8),
(18, 8),
(19, 9),
(20, 9),
(21, 10),
(22, 10),
(57, 1),
(58, 2),
(59, 3),
(60, 4),
(61, 5),
(62, 6),
(63, 7),
(64, 8),
(65, 9),
(39, 1),
(40, 2),
(41, 3),
(42, 4),
(43, 5),
(44, 6),
(45, 7),
(46, 8),
(47, 9),
(48, 10);

-- --------------------------------------------------------

--
-- Table structure for table `matiere_seq`
--

CREATE TABLE `matiere_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matiere_seq`
--

INSERT INTO `matiere_seq` (`next_val`) VALUES
(66);

-- --------------------------------------------------------

--
-- Table structure for table `professeur`
--

CREATE TABLE `professeur` (
  `id_professeur` int(11) NOT NULL,
  `cin_prof` varchar(255) DEFAULT NULL,
  `email_prof` varchar(255) DEFAULT NULL,
  `mot_de_passe_prof` varchar(255) DEFAULT NULL,
  `nom_prof` varchar(255) DEFAULT NULL,
  `prenom_prof` varchar(255) DEFAULT NULL,
  `sexe_prof` varchar(255) DEFAULT NULL,
  `telephone_prof` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeur`
--

INSERT INTO `professeur` (`id_professeur`, `cin_prof`, `email_prof`, `mot_de_passe_prof`, `nom_prof`, `prenom_prof`, `sexe_prof`, `telephone_prof`) VALUES
(1, NULL, 'prof1@gmail.com', 'PasswordProf1', 'Prof1', 'Professor1', NULL, NULL),
(2, NULL, 'prof2@gmail.com', 'PasswordProf2', 'Prof2', 'Professor2', NULL, NULL),
(3, NULL, 'prof3@gmail.com', 'PasswordProf3', 'Prof3', 'Professor3', NULL, NULL),
(4, NULL, 'prof4@gmail.com', 'PasswordProf4', 'Prof4', 'Professor4', NULL, NULL),
(5, NULL, 'prof5@gmail.com', 'PasswordProf5', 'Prof5', 'Professor5', NULL, NULL),
(6, NULL, 'prof6@gmail.com', 'PasswordProf6', 'Prof6', 'Professor6', NULL, NULL),
(7, NULL, 'prof7@gmail.com', 'PasswordProf7', 'Prof7', 'Professor7', NULL, NULL),
(8, NULL, 'prof8@gmail.com', 'PasswordProf8', 'Prof8', 'Professor8', NULL, NULL),
(9, NULL, 'prof9@gmail.com', 'PasswordProf9', 'Prof9', 'Professor9', NULL, NULL),
(10, NULL, 'prof10@gmail.com', 'PasswordProf10', 'Prof10', 'Professor10', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `professeur_seq`
--

CREATE TABLE `professeur_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeur_seq`
--

INSERT INTO `professeur_seq` (`next_val`) VALUES
(11);

-- --------------------------------------------------------

--
-- Table structure for table `realisation`
--

CREATE TABLE `realisation` (
  `tache_id` int(11) NOT NULL,
  `etudiant_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tache`
--

CREATE TABLE `tache` (
  `id_tache` int(11) NOT NULL,
  `date_limite` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `id_matiere` int(11) DEFAULT NULL,
  `id_professeur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tache`
--

INSERT INTO `tache` (`id_tache`, `date_limite`, `description`, `titre`, `id_matiere`, `id_professeur`) VALUES
(1, '2024-12-01 00:00:00.000000', 'Description de la tâche 1', 'Tâche 1', 1, 1),
(2, '2024-12-02 00:00:00.000000', 'Description de la tâche 2', 'Tâche 2', 2, 2),
(3, '2024-12-03 00:00:00.000000', 'Description de la tâche 3', 'Tâche 3', 3, 2),
(4, '2024-12-04 00:00:00.000000', 'Description de la tâche 4', 'Tâche 4', NULL, NULL),
(5, '2024-12-05 00:00:00.000000', 'Description de la tâche 5', 'Tâche 5', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tache_seq`
--

CREATE TABLE `tache_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tache_seq`
--

INSERT INTO `tache_seq` (`next_val`) VALUES
(56);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id_classe`);

--
-- Indexes for table `classe_matiere`
--
ALTER TABLE `classe_matiere`
  ADD KEY `FKijulrqpniueqr2ij3ou25v9r9` (`classe_id`),
  ADD KEY `FK3ho3r4plabnrgh1xljm72mvrs` (`matiere_id`);

--
-- Indexes for table `completion`
--
ALTER TABLE `completion`
  ADD PRIMARY KEY (`id_completion`),
  ADD KEY `FKhq20mur3r4xumjpwimsa6d90g` (`id_etd`),
  ADD KEY `FK6w054aboe1id7qbl4eh09u3pa` (`id_tache`);

--
-- Indexes for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`),
  ADD KEY `FKcm9x8f9tb6g3jbip4afl7rqi2` (`id_classe`);

--
-- Indexes for table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id_groupe`),
  ADD KEY `FKyhq0jxvbltf0fkqnaqgfhr1r` (`matiere_id`);

--
-- Indexes for table `groupe_creation`
--
ALTER TABLE `groupe_creation`
  ADD KEY `FKp43t0al0djfvqav6oyjkr2g6l` (`groupe_id`),
  ADD KEY `FKsmm55qw466dhipl6pbou9c7ob` (`etudiant_id`);

--
-- Indexes for table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id_matiere`);

--
-- Indexes for table `matiere_professeur`
--
ALTER TABLE `matiere_professeur`
  ADD KEY `FK2w4conap5k5i8qk287jeyppig` (`professeur_id`),
  ADD KEY `FKg0fifer7vqj7uhq1y9276g2og` (`matiere_id`);

--
-- Indexes for table `professeur`
--
ALTER TABLE `professeur`
  ADD PRIMARY KEY (`id_professeur`);

--
-- Indexes for table `realisation`
--
ALTER TABLE `realisation`
  ADD KEY `FK8ix8chiyo51bfofl5yc77d9sa` (`etudiant_id`),
  ADD KEY `FK8smc3cn845ttjrfdxetqwasrr` (`tache_id`);

--
-- Indexes for table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`id_tache`),
  ADD KEY `FK625giksxs2olt4ts644os4r2e` (`id_matiere`),
  ADD KEY `FK3iq33s4xkunh5wdhu0w9jbg21` (`id_professeur`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classe_matiere`
--
ALTER TABLE `classe_matiere`
  ADD CONSTRAINT `FK3ho3r4plabnrgh1xljm72mvrs` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`),
  ADD CONSTRAINT `FKijulrqpniueqr2ij3ou25v9r9` FOREIGN KEY (`classe_id`) REFERENCES `classe` (`id_classe`);

--
-- Constraints for table `completion`
--
ALTER TABLE `completion`
  ADD CONSTRAINT `FK6w054aboe1id7qbl4eh09u3pa` FOREIGN KEY (`id_tache`) REFERENCES `tache` (`id_tache`),
  ADD CONSTRAINT `FKhq20mur3r4xumjpwimsa6d90g` FOREIGN KEY (`id_etd`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FKcm9x8f9tb6g3jbip4afl7rqi2` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`);

--
-- Constraints for table `groupe`
--
ALTER TABLE `groupe`
  ADD CONSTRAINT `FKyhq0jxvbltf0fkqnaqgfhr1r` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`);

--
-- Constraints for table `groupe_creation`
--
ALTER TABLE `groupe_creation`
  ADD CONSTRAINT `FKp43t0al0djfvqav6oyjkr2g6l` FOREIGN KEY (`groupe_id`) REFERENCES `groupe` (`id_groupe`),
  ADD CONSTRAINT `FKsmm55qw466dhipl6pbou9c7ob` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `matiere_professeur`
--
ALTER TABLE `matiere_professeur`
  ADD CONSTRAINT `FK2w4conap5k5i8qk287jeyppig` FOREIGN KEY (`professeur_id`) REFERENCES `professeur` (`id_professeur`),
  ADD CONSTRAINT `FKg0fifer7vqj7uhq1y9276g2og` FOREIGN KEY (`matiere_id`) REFERENCES `matiere` (`id_matiere`);

--
-- Constraints for table `realisation`
--
ALTER TABLE `realisation`
  ADD CONSTRAINT `FK8ix8chiyo51bfofl5yc77d9sa` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `FK8smc3cn845ttjrfdxetqwasrr` FOREIGN KEY (`tache_id`) REFERENCES `tache` (`id_tache`);

--
-- Constraints for table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `FK3iq33s4xkunh5wdhu0w9jbg21` FOREIGN KEY (`id_professeur`) REFERENCES `professeur` (`id_professeur`),
  ADD CONSTRAINT `FK625giksxs2olt4ts644os4r2e` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`id_matiere`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
