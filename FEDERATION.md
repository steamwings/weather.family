## ActivityPub federation in Hometown

Hometown federates just like Mastodon, so the document below (identical to Mastodon's) still applies. The main difference is that any given `Note` object will have a `localOnly` property that is a boolean. While other servers will never see this boolean set to anything but `false` (since by definition these messages are not federated), _clients_ will see this property and can now render a post differently based on whether it is local-only.

## ActivityPub federation in Mastodon

Mastodon largely follows the ActivityPub server-to-server specification but it makes uses of some non-standard extensions, some of which are required for interacting with Mastodon at all.

Supported vocabulary: https://docs.joinmastodon.org/spec/activitypub/

### Required extensions

#### Webfinger

In Mastodon, users are identified by a `username` and `domain` pair (e.g., `Gargron@mastodon.social`).
This is used both for discovery and for unambiguously mentioning users across the fediverse. Furthermore, this is part of Mastodon's database design from its very beginnings.

As a result, Mastodon requires that each ActivityPub actor uniquely maps back to an `acct:` URI that can be resolved via WebFinger.

More information and examples are available at: https://docs.joinmastodon.org/spec/webfinger/

#### HTTP Signatures

In order to authenticate activities, Mastodon relies on HTTP Signatures, signing every `POST` and `GET` request to other ActivityPub implementations on behalf of the user authoring an activity (for `POST` requests) or an actor representing the Mastodon server itself (for most `GET` requests).

Mastodon requires all `POST` requests to be signed, and MAY require `GET` requests to be signed, depending on the configuration of the Mastodon server.

More information on HTTP Signatures, as well as examples, can be found here: https://docs.joinmastodon.org/spec/security/#http

### Optional extensions

- Linked-Data Signatures: https://docs.joinmastodon.org/spec/security/#ld
- Bearcaps: https://docs.joinmastodon.org/spec/bearcaps/
- Followers collection synchronization: https://codeberg.org/fediverse/fep/src/branch/main/fep/8fcf/fep-8fcf.md
- Search indexing consent for actors: https://codeberg.org/fediverse/fep/src/branch/main/fep/5feb/fep-5feb.md
