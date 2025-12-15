Interesting challenges

- Character length + Uniqueness

    - Say character limit is 7 characters. How do we ensure that generate unique 1 Billion 7 character urls?
    - MD5 and Sha1, Sha256 are not options here because these are minimun 16 bytes

    - Predictability of the Base62 encoding
        - not used for private url
        - only public
        - apparently there are some functions (bijective) that can obfuscate and also maintain one-to-one mapping from encoded value to decoded value (sqids.org)
    
    - Base62 encoding is not actually about shortening in principle but happens to be shortener for numeric values
        Number of bits required for N bits in 10's system is log N base 10
        Number of bits required for N bits in 62's system is log N base 62

    Hexadecimal (most commonly used representation)
    Hash    Algorithm	Bit Length	Hex String Length
    MD5	    128 bits	32 characters
    SHA-1	160 bits	40 characters
    SHA-256	256 bits	64 characters


    Base64 Representation (optional, if you need it)

    Hash    Algorithm	Bit Length	Base64 Length*
    MD5	    128 bits	22 chars (without padding)
    SHA-1	160 bits	27 chars (without padding)
    SHA-256	256 bits	43 chars (without padding)

- Redis 
    - counters (centralized)
    - cache (readpath)
        - stampede/thundering herd
            - background refresh for popular keys
            - write throuh refresh
            - reading can be locked for one entry
            - lock based reads
        
        - Redlock
        Redlock is designed by Antirez (Salvatore Sanfilippo), Redis creator, to improve safety over single-node Redis.
            - it is mostly academic. in real world, not sure if anyone uses
            - it tries to acquire lock from majority of the nodes

        - TTL
        - LRU

- Database
    read : write ratio -> 100:1

- Talk about 301 vs 302 redirect
    301 is permanent - browsers cache for ever
    302 is temporary

- Collision probability
    - Birthday paradox

- Estimates
    - Number of urls getting produced Per month 100 million
        - per year ~ 1B
            - 25 years - 25B
    
    - Storage -> 500 bytes * 1B -> 500G -> 25B means -> 12.5TB
    - Write RPS - 100M/30 per day -> 3.3M per day -> 10 hours -> 3.3/10 -> 0.33M per hour -> 5500 per min -> 90 per/second
    - Read RPS -> 90 * 100 -> 9000
    

https://highscalability.com/bitly-lessons-learned-building-a-distributed-system-that-han/


6 billion clicks a month
600 million shortens a month

400 servers. Not all 400 servers are handling redirects.  ~30 servers handle all incoming traffic from the outside world including shortens, redirects, api requests, web ui, etc.  The rest of the 400 are dedicated to various services either storing and organizing user data or providing various forms of processing and analysis (databases, metrics, web crawling, text analysis, etc).

Crawls a hundred million web pages a month.