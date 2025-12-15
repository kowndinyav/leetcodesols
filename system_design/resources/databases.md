
- Write, Read IOPS
- Transaction Semantics
- ACID guarantees
- Strong Relational Semantics
- SQL compatibility


🧠 Interview-ready “mental map” with TiDB and PlanetScale

IOPS Capability (Writes/sec)

   Millions       → Aerospike, ScyllaDB, Redis, Cassandra
   100Ks          → DynamoDB, Bigtable, TiDB
   50K–150K       → PlanetScale, MongoDB, Couchbase
   10K–50K        → Aurora, CockroachDB, Postgres/MySQL
   1K–5K          → Snowflake, Redshift, Elasticsearch


🟩 TiDB (NewSQL, distributed OLTP + HTAP)
IOPS class: High (100k–500k+ writes/sec) with proper horizontal scaling.
Why:
	•	TiDB uses TiKV (a distributed key-value engine inspired by Google Spanner).
	•	Raft replication → consistency with write amplification.
	•	Scaling writes requires scaling TiKV nodes.

Realistic numbers:
	•	Single cluster: ~200k–400k transactions/sec with proper tuning.
	•	Linearly scalable across regions.

Interview positioning:

“TiDB gives you MySQL compatibility with horizontally scalable transactions — sits between Aurora and DynamoDB in write throughput.”

⸻

🟩🟧 PlanetScale (MySQL + Vitess)

IOPS class: Medium-to-High (tens of thousands to ~100k+/sec) depending on sharding.

Why:
	•	PlanetScale is built on Vitess, which shards MySQL automatically.
	•	Its write throughput is limited by:
	•	the single-writer per shard design
	•	MySQL WAL and InnoDB internals
	•	As you add shards, you increase throughput.

Realistic numbers:
	•	Per shard: ~10k–30k writes/sec.
	•	With multiple shards: 100k+ possible.

Interview positioning:

“PlanetScale is horizontally scalable MySQL, but because each shard still behaves like a MySQL instance, its single-shard write IOPS is lower than DynamoDB, Scylla, or Cassandra.”

⸻

🔄 Updated IOPS Capability Table (including TiDB + PlanetScale)

🔵 Ultra-high (Millions/sec)

DB	Notes
Aerospike	In-memory + SSD optimized.
ScyllaDB	Shard-per-core, fully async.
Redis	Memory-backed.
Cassandra (large clusters)	Tuned clusters can hit huge scale.


⸻

🟩 High (100k–500k/sec)

DB	Notes
DynamoDB	Hot partitions dynamic; can scale massively.
Google Bigtable	Wide-column, horizontally scalable.
TiDB	Distributed OLTP, MySQL compatible.


⸻

🟧 Medium-to-High (50k–150k/sec)

DB	Notes
PlanetScale (Vitess)	Sharded MySQL → per shard limited.
MongoDB	Sharding increases throughput.
Couchbase	Good write path.


⸻

🟨 Medium (10k–50k/sec)

DB	Notes
Aurora MySQL / Aurora Postgres	Depends on cluster config.
CockroachDB	Multi-raft → write latency & throughput tradeoff.
PostgreSQL (RDS)	WAL-limited.
MySQL (RDS)	InnoDB + disk-limited.


⸻

🟥 Low (<5k/sec)

DB	Notes
Snowflake	Columnar OLAP.
Redshift	Batch ingestion.
Elasticsearch	Heavy indexing overhead.


⸻



⸻

👍 Why interviewers love when candidates mention TiDB & PlanetScale

Because most candidates only talk about:
	•	Postgres
	•	MySQL
	•	DynamoDB
	•	MongoDB

But senior-level and principal-level candidates differentiate themselves by referencing:
	•	TiDB (NewSQL)
	•	CockroachDB (Spanner-like)
	•	PlanetScale (Vitess)
	•	YugabyteDB
	•	ScyllaDB

This signals:
breadth, modern systems knowledge, and practical architecture sense.

⸻

If you want, I can also prepare:

✅ A one-page PDF cheat sheet
✅ A flowchart: “How to pick a DB by write throughput + latency + consistency”
✅ A talk track you can reuse in interviews

Want one of these?