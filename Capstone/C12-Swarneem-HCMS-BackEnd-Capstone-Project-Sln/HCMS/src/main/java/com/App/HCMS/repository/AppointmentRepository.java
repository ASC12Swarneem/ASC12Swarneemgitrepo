package com.App.HCMS.repository;

import com.App.HCMS.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentEntity, String> {

//    @Query(value = "SELECT DISTINCT tournament_name FROM matches", nativeQuery = true)
//    List<String> findAllUniqueTournaments();
//
//    @Query(value = "SELECT * FROM matches WHERE tournament_name = ?1", nativeQuery = true)
//    List<AppointmentEntity> findMatchesByTournament(String tournamentName);
//
//    @Query(value = "SELECT * FROM matches WHERE LOWER(match_name) LIKE LOWER(CONCAT('%', :query, '%'))", nativeQuery = true)
//    List<AppointmentEntity> findByNameContainingIgnoreCase(@Param("query") String query);
}
