-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2024 at 04:20 PM
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
(4, 2, 'DSI', 1),
(5, 2, 'DSI', 2),
(6, 3, 'DSI', 1),
(7, 3, 'DSI', 2),
(8, 2, 'RSI', 1),
(9, 3, 'RSI', 1),
(10, 2, 'SEM', 1),
(11, 3, 'SEM', 1);

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
(1, 4),
(1, 8),
(2, 1),
(2, 4),
(3, 2),
(4, 4);

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
(1),
(101);

-- --------------------------------------------------------

--
-- Table structure for table `completion`
--

CREATE TABLE `completion` (
  `commentaires` varbinary(255) DEFAULT NULL,
  `complexite` tinyint(4) DEFAULT NULL,
  `en_pause` tinyint(1) NOT NULL DEFAULT 0,
  `marquer` tinyint(1) NOT NULL DEFAULT 0,
  `progression` int(11) NOT NULL DEFAULT 0,
  `temps_ecoule` bigint(20) DEFAULT NULL,
  `total_soust_taches` int(11) NOT NULL DEFAULT 0,
  `etudiant_id` int(11) NOT NULL,
  `tache_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `completion`
--

INSERT INTO `completion` (`commentaires`, `complexite`, `en_pause`, `marquer`, `progression`, `temps_ecoule`, `total_soust_taches`, `etudiant_id`, `tache_id`) VALUES
(NULL, NULL, 0, 0, 0, NULL, 0, 1, 1),
(0xaced0005737200136a6176612e7574696c2e41727261794c6973747881d21d99c7619d03000149000473697a65787000000002770400000002740005436f6d2031740005436f6d203278, NULL, 1, 0, 1, 3, 3, 1, 2),
(NULL, NULL, 0, 1, 1, NULL, 0, 1, 3),
(NULL, NULL, 0, 0, 0, NULL, 0, 1, 4),
(NULL, NULL, 0, 1, 1, NULL, 0, 1, 5),
(NULL, NULL, 0, 0, 0, NULL, 0, 1, 6),
(NULL, NULL, 0, 0, 0, NULL, 0, 1, 7),
(NULL, NULL, 0, 0, 0, NULL, 0, 2, 1),
(NULL, NULL, 0, 0, 0, NULL, 0, 2, 2),
(NULL, NULL, 0, 0, 0, NULL, 0, 2, 3),
(NULL, NULL, 0, 0, 0, NULL, 0, 3, 1),
(NULL, NULL, 0, 0, 0, NULL, 0, 3, 2),
(NULL, NULL, 0, 0, 0, NULL, 0, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `email_etd` varchar(255) DEFAULT NULL,
  `mot_de_passe_etd` varchar(255) DEFAULT NULL,
  `nom_etd` varchar(255) DEFAULT NULL,
  `prenom_etd` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `id_classe` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `email_etd`, `mot_de_passe_etd`, `nom_etd`, `prenom_etd`, `role`, `id_classe`) VALUES
(1, 'E1@gmail.com', 'E1', 'ETUDIANT1', 'XXX', 'etudiant', 1),
(2, 'E2@gmail.com', 'n65KQ8Ov', 'ETUDIANT2', 'XXX', 'etudiant', 1),
(3, 'E3@gmail.com', 'Joz79CdE', 'ETUDIANT3', 'XXX', 'etudiant', 1),
(4, 'E4@gmail.com', 'E83BdjKu', 'ETUDIANT4', 'XXX', 'etudiant', 4),
(5, 'E5@gmail.com', '#SIGpPuG', 'ETUDIANT5', 'XXX', 'etudiant', 4),
(6, 'E6@gmail.com', 't2TCtrTp', 'ETUDIANT6', 'XXX', 'etudiant', 6),
(7, 'E7@gmail.com', 'rl6UsMud', 'ETUDIANT7', 'XXX', 'etudiant', 6);

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
(1),
(101);

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` int(11) NOT NULL,
  `libelle_groupe` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `libelle_groupe`) VALUES
(1, 'Grpupe 1');

-- --------------------------------------------------------

--
-- Table structure for table `groupe_creation`
--

CREATE TABLE `groupe_creation` (
  `etudiant_id` int(11) NOT NULL,
  `groupe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `groupe_creation`
--

INSERT INTO `groupe_creation` (`etudiant_id`, `groupe_id`) VALUES
(1, 1),
(2, 1),
(3, 1);

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
(1),
(51);

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
(1, 'ALGO I', '1'),
(2, 'WEB', '1'),
(3, 'MOBILE', '1'),
(4, 'SGBD', '2'),
(5, 'JAVA', '1'),
(6, 'ANGULAR', '2'),
(7, 'PYTHON', '2'),
(8, 'SPRING', '2'),
(9, 'SCRUM', '1'),
(10, 'UML', '1'),
(11, 'ARDUINO', '1'),
(12, 'RESEAU', '1'),
(13, 'LINUX', '2'),
(14, 'ALGO II', '2'),
(15, 'MATH', '2'),
(16, 'DROIT', '1'),
(17, 'NODE', '1'),
(18, 'SOA', '1'),
(52, 'Phy', '1');

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
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(4, 1);

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
(1),
(151);

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
  `role` varchar(255) DEFAULT NULL,
  `sexe_prof` varchar(255) DEFAULT NULL,
  `telephone_prof` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professeur`
--

INSERT INTO `professeur` (`id_professeur`, `cin_prof`, `email_prof`, `mot_de_passe_prof`, `nom_prof`, `prenom_prof`, `role`, `sexe_prof`, `telephone_prof`) VALUES
(1, NULL, 'P1@gmail.com', 'P1', 'PROF1', 'XXX', 'prof', NULL, NULL),
(2, NULL, 'P2@gmail.com', '4iuK5vRl', 'PROF2', 'XXX', 'prof', NULL, NULL),
(3, NULL, 'P3@gmail.com', 'KAuHqsN7', 'PROF3', 'XXX', 'prof', NULL, NULL),
(4, NULL, 'P4@gmail.com', 'UnTXnhDv', 'PROF4', 'XXX', 'prof', NULL, NULL),
(5, NULL, 'P5@gmail.com', 'w3D9ytaE', 'PROF5', 'XXX', 'prof', NULL, NULL),
(6, NULL, 'P6@gmail.com', 'Q2pZfFZU', 'PROF6', 'XXX', 'prof', NULL, NULL),
(7, NULL, 'P7@gmail.com', 'Ap9sUBUG', 'PROF7', 'XXX', 'prof', NULL, NULL),
(8, NULL, 'P8@gmail.com', 'gVzcYpSI', 'PROF8', 'XXX', 'prof', NULL, NULL),
(9, NULL, 'P9@gmail.com', 'I2ev*EL0', 'PROF9', 'XXX', 'prof', NULL, NULL);

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
(1),
(101);

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
  `id_professeur` int(11) DEFAULT NULL,
  `id_tachep` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tache`
--

INSERT INTO `tache` (`id_tache`, `date_limite`, `description`, `titre`, `id_matiere`, `id_professeur`, `id_tachep`) VALUES
(1, '2024-12-09 14:59:00.000000', 'Desc 1', 'Tache1', 1, 1, NULL),
(2, '2024-12-11 14:59:00.000000', 'Desc 2', 'Tache 2', 2, 1, NULL),
(3, '2024-12-14 15:00:00.000000', 'Desc 3', 'Tache 3', 3, 1, NULL),
(4, '2024-12-09 16:03:00.000000', 'Desc p', 'Tache Perso', NULL, NULL, NULL),
(5, NULL, NULL, 'ST 1', NULL, NULL, 2),
(6, NULL, NULL, 'ST 2', NULL, NULL, 2),
(7, NULL, NULL, 'ST 3', NULL, NULL, 2);

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
(101),
(151);

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
  ADD PRIMARY KEY (`etudiant_id`,`tache_id`),
  ADD KEY `FK6cwwvjidi25ty0ct436nwp2gx` (`tache_id`);

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
  ADD PRIMARY KEY (`id_groupe`);

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
-- Indexes for table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`id_tache`),
  ADD KEY `FK625giksxs2olt4ts644os4r2e` (`id_matiere`),
  ADD KEY `FK3iq33s4xkunh5wdhu0w9jbg21` (`id_professeur`),
  ADD KEY `FKgubcpgh983jaccey9ulsym3oo` (`id_tachep`);

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
  ADD CONSTRAINT `FK6cwwvjidi25ty0ct436nwp2gx` FOREIGN KEY (`tache_id`) REFERENCES `tache` (`id_tache`),
  ADD CONSTRAINT `FKp853bvhcjad7jlp4jo4sqblbp` FOREIGN KEY (`etudiant_id`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FKcm9x8f9tb6g3jbip4afl7rqi2` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`);

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
-- Constraints for table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `FK3iq33s4xkunh5wdhu0w9jbg21` FOREIGN KEY (`id_professeur`) REFERENCES `professeur` (`id_professeur`),
  ADD CONSTRAINT `FK625giksxs2olt4ts644os4r2e` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`id_matiere`),
  ADD CONSTRAINT `FKgubcpgh983jaccey9ulsym3oo` FOREIGN KEY (`id_tachep`) REFERENCES `tache` (`id_tache`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
